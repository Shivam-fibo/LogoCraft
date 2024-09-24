import React, { useEffect, useContext } from 'react';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import { icons } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function LogoPreview({ downloadIcon }) {
  const { state } = useContext(UpdateStorageContext);

  // Use effect to trigger the download if the icon is to be downloaded
  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
      localStorage.removeItem('value'); // Clear the localStorage after download
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById('downloadLogoDiv');
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngImage;
      downloadLink.download = 'download_icon.png';
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return null;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: state?.bgPadding }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: state?.bgRounded,
            background: state?.bgColor,
          }}
        >
          <Icon
            name={state?.icon}
            color={state?.iconColor}
            size={state?.iconSize}
            rotate={state?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
}
