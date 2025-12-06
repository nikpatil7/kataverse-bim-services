import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';

export default function VectorDivider({ vectorSrc, height = 200 }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
      <OptimizedImage
        src={vectorSrc}
        alt="section divider"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  );
}

VectorDivider.propTypes = {
  vectorSrc: PropTypes.string.isRequired,
  height: PropTypes.number,
};
