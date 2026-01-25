import './style.sass'
import cn from 'classnames'

export const Sort = ({isSorted, sortList}) => {
  const className = cn('sort', {
    'sorted' : isSorted
  })

  const comment = '// сортировка по дате'
  return (
    <div className={className} onClick={sortList}>
      <span>quick-sort.js</span> <span>{comment}</span>
    </div>
  )
}