interface BaseRemoveFileButtonProps {
  handleRemoveFile: () => void
}

export const BaseRemoveFileButton = ({ handleRemoveFile }: BaseRemoveFileButtonProps): JSX.Element => {
  return (
    <button
      className="text-[10px] text-red-500 border border-red-500 px-[5px] py-0.5 rounded-full cursor-pointer"
      onClick={handleRemoveFile}
    >
      X
    </button>
  )
}
