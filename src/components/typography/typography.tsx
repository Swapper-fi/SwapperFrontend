export interface TypographyProps {
  text: String;
}

export const Typography: React.FC<TypographyProps> = (props) => {
  return (
    <h1> {props.text} </h1>
  )
}

