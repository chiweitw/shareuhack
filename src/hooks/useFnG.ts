import { useEffect, useState } from 'react'
import { fngFormatter, formatedFngProps } from 'utils/fetch/fng'

export function useFnG(limit = 1) {
  const [FnG, setFnG] = useState<formatedFngProps[]>([])

  useEffect(() => {
    fetch(`https://api.alternative.me/fng/?limit=${limit}`, {
      method: 'GET',
      mode: 'cors',
      headers: {},
    })
      .then((r) => {
        return r.clone().json()
      })
      .then((json) => {
        const formatted = fngFormatter(json).reverse()

        setFnG(formatted)
      })
      .catch((e) => console.error(e))
  }, [])

  return FnG
}
