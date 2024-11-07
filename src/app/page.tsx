import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'

export default async function Home() {
  const supabase = await createClient()

  async function fetchDoctors() {
    const { data, error } = await supabase.from('doctor').select()
    if (error) {
      console.error('Error fetching data:', error)
    } else {
      console.log(data)
      return data
    }
  }

  async function fetchDoctorsWithSpecializations() {
    const { data, error } = await supabase.from('doctor').select(`
            id,
            first_name,
            last_name,
            email,
            doctor_specializations (
                specialization_id,
                specializations (
                    specialization_name
                )
            )
        `)
    if (error) {
      console.error('Error fetching data:', error)
    } else {
      console.log(data)
      return data
    }
  }

  const doctors = await fetchDoctorsWithSpecializations()

  return (
    <>
      <div className='flex-1 w-full flex flex-col gap-12'>
        <nav className='w-screeen flex'></nav>
        <main className='w-max-[1200px] w-full mx-10'>

        </main>
        <div className='w-full'>
          <pre>{JSON.stringify({ doctors }, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}
