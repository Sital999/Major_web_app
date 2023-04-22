import {
  CollegeDashboard,
  SubjectDashboard,
  SemesterDashboard,
  DepartmentDashboard,
} from './index';

interface IAcademicProps {
  academic: string;
}

const AcademiaDashboard = ({ academic }: IAcademicProps) => {
  return (
    <body className="w-screen child:space-y-10">
      {academic === 'College' ? (
        <CollegeDashboard />
      ) : academic === 'Semester' ? (
        <SemesterDashboard />
      ) : academic === 'Subjects' ? (
        <SubjectDashboard />
      ) : (
        <DepartmentDashboard />
      )}
    </body>
  );
};

export default AcademiaDashboard;
