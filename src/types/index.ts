export type AttractionProps = {
  attrName: string;
  imageSrcUrl?: string | null;
  id: string;
};

export type EventType = {
  name: string;
  dates: {
    start: {
      localDate: string;
    };
  };
  images: [{ url: string }];
  _embedded: {
    venues: [
      {
        name: string;
      }
    ];
  };
};
