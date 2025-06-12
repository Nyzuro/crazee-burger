import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ imageSource, title, className }) {
	return (
		<ImagePreviewStyled className={className}>
			{imageSource ? (
				<img src={imageSource} alt={title} />
			) : (
				<div className="empty-image">Aucune Image</div>
			)}
		</ImagePreviewStyled>
	);
}

const ImagePreviewStyled = styled.div`
	display: grid;
	grid-area: 1 / 1 / 2 / 2;
	place-items: center;

	img {
		object-fit: contain;
		width: 100px;
		height: 100px;
	}

	.empty-image {
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		color: ${theme.colors.greySemiDark};
		border: 1px solid ${theme.colors.greyLight};
		border-radius: ${theme.borderRadius.round};
	}
`;
