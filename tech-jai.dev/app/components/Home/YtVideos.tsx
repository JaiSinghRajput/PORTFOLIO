import React from 'react';
import { Tag, PlayCircle, Video, Clock } from 'lucide-react';
import type { Youtube } from '~/types';

interface FeaturedVideosSectionProps {
  videos: Youtube[];
}

export function FeaturedVideosSection({ videos }: FeaturedVideosSectionProps) {
  // Filter featured & published videos only
  const featuredVideos = videos.filter(v => v.isFeatured && v.isPublished);

  // Separate shorts and long videos
  const shorts = featuredVideos.filter(v => v.type === 'short');
  const longs = featuredVideos.filter(v => v.type === 'long');

  return (
    <section id="featured-videos" className="py-24 section-theme">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-12 text-center">
          Featured Videos
        </h2>

        {/* Shorts: horizontal scroll with vertical video cards */}
        {shorts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-theme-primary mb-6">Shorts</h3>
            <div className="flex space-x-6 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-theme-primary/50">
              {shorts.map(video => (
                <article
                  key={video._id}
                  className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
                  style={{ width: '200px' }}
                >
                  <div className="relative" style={{ paddingTop: '177.78%' /* 9:16 aspect ratio */ }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.videoUrl}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="text-md font-bold line-clamp-2">{video.title}</h4>
                    <p className="text-muted-foreground text-xs line-clamp-3">{video.description}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <PlayCircle className="h-4 w-4" />
                      <span>{video.channelName}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {video.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-theme-primary/10 text-theme-primary rounded-full px-2 py-0.5 text-xs flex items-center"
                        >
                          <Tag className="inline h-3 w-3 mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Long Videos: grid with horizontal aspect ratio */}
        {longs.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-theme-primary mb-6">Long Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {longs.map(video => (
                <article
                  key={video._id}
                  className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.videoUrl}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="text-lg font-bold line-clamp-2">{video.title}</h4>
                    <p className="text-muted-foreground text-sm line-clamp-3">{video.description}</p>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <Video className="h-4 w-4" />
                      <span>{video.channelName}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {video.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-theme-primary/10 text-theme-primary rounded-full px-2 py-1 text-xs flex items-center"
                        >
                          <Tag className="inline h-3 w-3 mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* No featured videos */}
        {featuredVideos.length === 0 && (
          <p className="text-center text-muted-foreground">No featured videos available.</p>
        )}
      </div>
    </section>
  )
}
