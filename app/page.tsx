import PhotoUploader from '@/components/PhotoUploader';
import StylizedPhoto from '@/components/StylizedPhoto';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">Anime Photo Stylizer</h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Upload Photo</h2>
                <PhotoUploader />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Stylized Result</h2>
                <StylizedPhoto />
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <MusicPlayer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}