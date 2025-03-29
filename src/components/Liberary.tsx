interface Props {
  Assets: string[];
  onSelectItem: (Asset: string) => void;
}

const Liberary = ({ Assets, onSelectItem }: Props) => {
  // Array of Assets

  return (
    <div>
      <div className="h-full">
        <main
          className="imggallery mt-5 justify-around m-auto py-2"
          id="gallery"
        >
          {/* // Dynamically create image elements and append them to the imgGallery */}
          {Assets.map((Asset) => (
            <div key={Asset} className="flex max-w-lg rounded-lg">
              <a target="_blank" href={Asset}>
                <img
                  src={Asset}
                  className="rounded-lg box-border"
                  onClick={() => {
                    onSelectItem(Asset);
                  }}
                />
              </a>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Liberary;
