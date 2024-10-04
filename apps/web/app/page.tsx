import { getHouses, getSwornMember } from "./lib/getData";
import HousesList from "./components/HousesList";



export default async function Home() {
  // fetch
  const houses = await getHouses();

  const swornMembersByHouse = await Promise.all(houses.map(async (house) => {
    const swornMembers = await Promise.all(house.swornMembers.map(getSwornMember))
    return { ...house, swornMembers }
  }))

  return (
    <div>
    <main>
      <h1>Houses of Ice and Fire</h1>
      <HousesList houses={swornMembersByHouse} />
    </main>
    </div>
  );
}
