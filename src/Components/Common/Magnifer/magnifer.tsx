import { useState } from 'react';

type magniferProps = {
    src : string,
    // width : number | string,
    // height : number | string,
    magnifierHeight : number
    magnifierWidth : number,
    zoomLevel : number,
    alt?:string,
    className? : string
}
const ImageMagnifier = ({
    src,
    // width,
    // height,
    alt,
    magnifierHeight = 150,
    magnifierWidth = 150,
    zoomLevel = 3,
    className
}:magniferProps) => {

    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [[x, y], setXY] = useState([0, 0]);

    const mouseEnter = (e:React.MouseEvent<HTMLImageElement,MouseEvent>) => {
        const el = e.currentTarget;

        const { width, height } = el.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    }

    const mouseLeave = (e:React.MouseEvent<HTMLImageElement,MouseEvent>) => {
        e.preventDefault();
        setShowMagnifier(false);
    }

    const mouseMove = (e:React.MouseEvent<HTMLImageElement,MouseEvent>) => {
        const el = e.currentTarget;
        const { top, left } = el.getBoundingClientRect();

        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;

        setXY([x, y]);
    };

    return (
        <div className="relative inline-block w-full h-full">
            <img
                src={src}
                className={className}
                // width={width}
                // height={height}
                alt={alt}
                onMouseEnter={(e) => mouseEnter(e)}
                onMouseLeave={(e) => mouseLeave(e)}
                onMouseMove={(e) => mouseMove(e)}
            />
            {
                showMagnifier ? 
                    <div
                        style={{
                            display: showMagnifier ? '' : 'none',
                            position: 'absolute',
                            zIndex : '9999',
                            pointerEvents: 'none',
                            height: `${magnifierHeight}px`,
                            width: `${magnifierWidth}px`,
                            opacity: '1',
                            border: '1px solid lightgrey',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            backgroundImage: `url('${src}')`,
                            backgroundRepeat: 'no-repeat',
                            top: `${y - magnifierHeight / 2}px`,
                            left: `${x - magnifierWidth / 2}px`,
                            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                        }}
                    />

                    : null
            }
        </div>
    )
};

export default ImageMagnifier;