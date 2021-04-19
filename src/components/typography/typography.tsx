import React from 'react'
import './index.css'
export interface TypographyProps {
  size?: Number;
  textColor?: String;
  text: String;
  type: "d1" | "d2" | "d3" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "menu" | "title" | "captionLarge" | "captionSmall" | "bodyLarge" | "bodySmall" | "buttonLarge" | "buttonsmall"
  inverted?: Boolean;
}

export const Typography: React.FC<TypographyProps> = ({ size, textColor, text, type, inverted }) => {
  return (
    <text style={{ color: textColor ? textColor as string : 'white' }} className={`text ${type} ${inverted ? 'inverted' : undefined}`}> {text} </text>
  )
}
