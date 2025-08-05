import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {getUserCompanions, getRecentSessions} from "@/lib/actions/companions.actions";
import { currentUser } from "@clerk/nextjs/server";
import {getSubjectColor} from "@/lib/utils";


const Page = async () => {
    const user = await currentUser();
    let companions = [];
    if (user) {
        companions = await getUserCompanions(user.id);
    }
    companions = companions.slice(0, 3);
    const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>

        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page
export const dynamic = 'force-dynamic';