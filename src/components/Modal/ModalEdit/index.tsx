import { AiOutlineStar } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { MovieContext } from "../../../providers/MovieContext"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { IReview, TMovieScore } from "../../../providers/MovieContext/@types"
import { StyledModalEdit } from "./style"
import { StyledBtnRatingUpdate } from "../../../styles/buttons/button"
import { StyledSelectModal } from "../../../styles/select/select"
import { StyledTextareaModal } from "../../../styles/textarea/textarea"
import { StyledTitleOne } from "../../../styles/typography/typography"
import { ReviewSchema } from "./Schema/ReviewSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { StyledErrorZod } from "../../../styles/typography/typography"

interface ModalEditProps {
  onClose: () => void
  onSave: (reviewData: IReview) => Promise<void>
}

export const ModalEdit = ({
  onClose,
  onSave,
}: ModalEditProps) => {
  const { selectedMovie } = useContext(MovieContext)
  const { user } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReview>({
    resolver: zodResolver(ReviewSchema),
  })

  const onSubmit = (data: IReview) => {
    const formData: IReview = {
      ...data,
      userId: user?.id ?? 0,
      movieId: selectedMovie?.id ?? 0,
      score: Number(data.score) as TMovieScore,
    }
    reset()
    onClose()
    onSave(formData)
  }

  return (
    <StyledModalEdit>
      <div className="modalBox">
        <StyledTitleOne>Editar Avaliação</StyledTitleOne>
        <button className="modalBtnClose" onClick={onClose}>
          X
        </button>

        <form onSubmit={handleSubmit(onSubmit) as any}>
          <StyledSelectModal {...register("score")}>
            <option value="">Selecione uma nota</option>
            {[...Array(11)].map((_, index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </StyledSelectModal>
          {errors.score ? (
            <StyledErrorZod>{errors.score.message}</StyledErrorZod>
          ) : null}
          <StyledTextareaModal
            placeholder="Deixe um comentário"
            {...register("description")}
          ></StyledTextareaModal>
          {errors.description ? (
            <StyledErrorZod>{errors.description.message}</StyledErrorZod>
          ) : null}
          <StyledBtnRatingUpdate type="submit">
            <AiOutlineStar /> Atualizar
          </StyledBtnRatingUpdate>
        </form>
      </div>
    </StyledModalEdit>
  )
}
