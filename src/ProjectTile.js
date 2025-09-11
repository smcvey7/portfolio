import React, { useMemo, useState } from "react";

function ProjectTile({ name, description, image, github, demo, deployed, youtubeEmbeded }) {

  const ActionLink = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
    >
      {children}
    </a>
  );

  const youtubeId = useMemo(() => {
    if (!youtubeEmbeded) return null;
    try {
      const url = new URL(youtubeEmbeded);
      const parts = url.pathname.split("/");
      const idx = parts.indexOf("embed");
      if (idx !== -1 && parts[idx + 1]) {
        return parts[idx + 1];
      }
      return null;
    } catch (_) {
      return null;
    }
  }, [youtubeEmbeded]);

  const thumbCandidates = useMemo(() => {
    const list = [];
    if (image) list.push(image);
    if (youtubeId) {
      list.push(
        `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
        `https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`,
        `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
      );
    }
    return list;
  }, [image, youtubeId]);

  const [thumbIndex, setThumbIndex] = useState(0);
  const imgSrc = thumbCandidates[thumbIndex] || null;

  return (
    <div className="group bg-white rounded-xl ring-1 ring-slate-200 shadow-sm overflow-hidden flex flex-col">
      {imgSrc ? (
        <div className="relative w-full pt-[56.25%] bg-slate-100">
          <img
            src={imgSrc}
            alt={`${name} preview`}
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
            onError={() => setThumbIndex((i) => i + 1)}
          />
        </div>
      ) : null}

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="mt-2 text-sm text-slate-600 text-left">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {deployed ? <ActionLink href={deployed}>Live</ActionLink> : null}
          {demo ? <ActionLink href={demo}>Demo</ActionLink> : null}
          {github ? (
            <ActionLink href={github}>
              <img src="/img/github-icon.png" alt="GitHub" className="w-4 h-4" />
              Code
            </ActionLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
