import { NotesDashboard, SlidesDashboard } from '.';

interface IContentDashboard {
  content: string;
}

const ContentDashboard = ({ content }: IContentDashboard) => {
  return (
    <body className="w-screen child:space-y-10">
      {content === 'Notes' ? (
        <NotesDashboard />
      ) : content === 'Slides' ? (
        <SlidesDashboard />
      ) : (
        <></>
      )}
    </body>
  );
};

export default ContentDashboard;
