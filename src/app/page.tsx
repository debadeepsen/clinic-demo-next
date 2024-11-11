import SignInUp from '@/components/SignInUp'
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'

export default async function Home() {
  const supabase = await createClient()

  async function fetchDoctors() {
    const { data, error } = await supabase.from('doctor').select()
    if (error) {
      console.error('Error fetching data:', error)
    } else {
      return data
    }
  }

  async function fetchDoctorsWithSpecializations() {
    const { data, error } = await supabase.from('doctor').select(`
            id,
            first_name,
            last_name,
            email,
            profile_image,
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
      return data
    }
  }

  // const doctors = await fetchDoctorsWithSpecializations()

  return (
    <>
      <div className='flex-1 w-screen h-screen flex flex-col gap-12'>
        <main className='w-full h-full flex'>
          <div className='flex-[4]'>
            <img
              alt=''
              src='/img/medical-appointment-doctor-healthcare-40568.webp'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex-[2]'>
            <SignInUp />
          </div>
        </main>
        {/* <div className='w-full'>
          <pre>{JSON.stringify({ doctors }, null, 2)}</pre>
        </div> */}
      </div>
    </>
  )
}
