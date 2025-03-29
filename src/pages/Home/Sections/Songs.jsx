function SongSection({ title, songs }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex overflow-x-auto gap-4">
        {songs.length > 0 ? (
          songs.map((song) => (
            <div
              key={song.id}
              className="w-40 p-2 bg-gray-800 rounded-lg text-white"
            >
              {song.image ? (
                <img
                  src={song.image}
                  alt={song.name}
                  className="w-full rounded-md"
                />
              ) : (
                <div className="w-full h-40 bg-gray-600 flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}
              <p className="mt-2 text-sm">{song.name}</p>
              <p className="text-xs text-gray-400">{song.artist}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No songs available.</p>
        )}
      </div>
    </div>
  );
}

export default SongSection;
