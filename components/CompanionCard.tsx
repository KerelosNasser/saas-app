import Link from "next/link";

interface CompanionCardProps {
  ID: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

function CompanionCard({ID, name, topic, subject, duration, color }: CompanionCardProps) {
  return (
    <article className='companion-card' style={{backgroundColor: color}}>
      <div className='flex justify-between item-center'>
        <div className="subject-badge">{subject}</div>
        <button type="button" className="companion-bookmark">
          <img src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={12.5} />
        </button>
      </div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-sm">{topic}</p>
        <div className="flex justify-between item-center">
          <div className="flex justify-center items-center">
            <img src="/icons/clock.svg" alt="clock" width={12.5} height={12.5} />
            <p className="text-sm">{duration} mins</p>
          </div>
        </div>
        <Link href={`/companions/${ID}`} className="btn-primary w-full flex items-center justify-center">
          View Companion
        </Link>
    </article>
  )
}

export default CompanionCard