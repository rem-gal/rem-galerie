import type { SvgShape } from '../data/products'

type Props = {
  viewBox: string
  paths: SvgShape[]
  className?: string
}

/**
 * Renders the SVG ceramic placeholder for a product.
 * When Shopify images are available, replace this component
 * with a standard <img> tag using product.featuredImage.url.
 */
export default function CeramicSvg({ viewBox, paths, className }: Props) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {paths.map((shape, i) => {
        if (shape.type === 'ellipse') {
          return (
            <ellipse
              key={i}
              cx={shape.cx}
              cy={shape.cy}
              rx={shape.rx}
              ry={shape.ry}
              fill={shape.fill}
            />
          )
        }
        if (shape.type === 'path-stroke') {
          return (
            <path
              key={i}
              d={shape.d}
              stroke={shape.stroke}
              strokeWidth={shape.strokeWidth}
              fill={shape.fill}
            />
          )
        }
        return <path key={i} d={shape.d} fill={shape.fill} />
      })}
    </svg>
  )
}
