import { NotesDashboard, SlidesDashboard } from '.';

interface IContentDashboard {
  content: string;
}

const ContentDashboard = ({ content }: IContentDashboard) => {
  return (
    <body>
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
