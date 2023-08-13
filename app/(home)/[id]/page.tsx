'use client'

import Card from '@/components/Card'
import { movieAPI } from '@/util/API/Movie'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const searchParams = useSearchParams()
  // const router = useRouter()
  // const {
  //   query: { statusId },
  // } = router

  const [data, setData] = useState<movie[]>()

  useEffect(() => {
    const movie = async () => {
      const movie = await movieAPI.findByStatus("1")
      // const movie = await movieAPI.findAll()
      setData(movie)
      console.log(searchParams)
    }
    movie()
  }, [])

  return <div>{data?.map((movie: movie) => { return <Card id={`card_${movie.id}`} className="col-6 col-md-3 p-4" key={movie.id} data={movie} />; })}</div>
}