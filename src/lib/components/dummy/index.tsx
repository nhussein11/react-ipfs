export interface DummyProps {
  label: string
}

export const Dummy = ({ label }: DummyProps): JSX.Element => {
  return <button className="border border-black px-5 py-2 rounded-xl">{label}</button>
}
