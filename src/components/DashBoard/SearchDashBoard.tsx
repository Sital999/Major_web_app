// import { cards } from '@constants/books';
import { Card } from '@components/card';
import graduation from '@assets/logo/graduation.png';

const SearchDashboard = () => {
  return (
    <>
      <span className="py-2 text-center text-2xl text-white">All Resources</span>
      <div className="flex flex-wrap justify-center gap-6 lg:px-48 md:px-24 xs:px-2">
        <Card size="sm" isSearchCard={true} bgcolor={'bg-cyan-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-red-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-cyan-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-green-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-cyan-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-red-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-cyan-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-green-500'} icon={graduation} />{' '}
        <Card size="sm" isSearchCard={true} bgcolor={'bg-cyan-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-red-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-cyan-500'} icon={graduation} />
        <Card size="sm" isSearchCard={true} bgcolor={'bg-green-500'} icon={graduation} />
      </div>
    </>
  );
};

export default SearchDashboard;
