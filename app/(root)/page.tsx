import Interviewcard from "@/components/Interviewcard"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/action/auth.action"
import { getInterviewByUserId, getLatestInterviews } from "@/lib/action/general.action"
import Image from "next/image"
import Link from "next/link"

const page = async() => {
  const user = await getCurrentUser();

  const [userInterviews,latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId:user?.id!})
  ])
  const getuserInterviews = await getInterviewByUserId(user?.id!);
  const getlatestInterviews = await getLatestInterviews({userId:user?.id!})

  const hasPastInterviews = userInterviews ?.length! >0;
  const hasUpComingInterviews = latestInterviews?.length! >0;
  return (
   <>
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg ">
        <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
        <p className="text-lg">Practice on real interview questions & get instant feedback</p>
        <Button asChild className="btn-primary max-sw:w-full">
          <Link href="/interview">Start an interview</Link> 
        </Button>
      </div>
      <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interview </h2>
      <div className="interviews-section">
        { hasPastInterviews?(
          userInterviews?.map((interview)=>(
             <Interviewcard {...interview} key={interview.id}/>
          ))):
          (<p>You haven't taken any interviews yet.</p>)
       }
      </div>
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>
      <div className="interviews-section">
        { hasUpComingInterviews?(
          latestInterviews?.map((interview)=>(
             <Interviewcard {...interview} key={interview.id}/>
          ))):
          (<p>There are no new interviews available.</p>)
       }
      </div>
    </section>
   </>
  )
}

export default page