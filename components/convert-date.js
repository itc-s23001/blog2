import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

const ConvertDate = ({ dateISO }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年MM月dd日', {
        local: ja
      })}
    </time>
  )
}
export default ConvertDate