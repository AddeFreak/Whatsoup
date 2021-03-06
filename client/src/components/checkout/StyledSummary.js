import styled from 'styled-components';

export const StyledSummary = styled.div`
	background-color: #dfd;

	.container {
		border-top: 2px solid black;
		height: 100%;
		background: #ffb;
		font-size: 18px;
		font-weight: lighter;
		padding-top: 10px;
		margin: 0;
	}
	.listItems {
		font-size: 13px;
	}
	.container > h5 {
		margin: 0;
		padding-right: 10px;
		padding-left: 10px;
	}

	.cancelOk {
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding-right: 5px;
		padding-left: 5px;
		margin-top: 7px;
	}
	.cancelOk button {
		height: 30px;
		width: 300px;
	}
	.totalPrice,
	.listItems {
		display: flex;
		flex-direction: wrap;
		justify-content: space-between;
		padding-right: 10px;
		padding-left: 10px;
		border-bottom: 1px solid black;
	}

	.finalPrice {
		font-family: Lobster;
		font-size: 20px;
		font-weight: 100;
		padding-top: 16px;
		margin: 0;
		margin-top: 3px;
	}
	.friendorder {
		display: column;
		justify-content: space-between;
		margin-top: 7px;
	}
	.frienditem {
		margin: 5px;
		padding-left: 10px;
		padding-right: 10px;
		font-size: 12px;
	}
	.friend {
		font-size: 15px;
		margin-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.frienditem {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.final {
		justify-content: center;
		font-family: Lobster;
		font-size: 25px;
		font-weight: 100;
		padding-top: 16px;
		margin: 0;
	}
	.tp {
		font-size: 15px;
	}
	.total {
		justify-content: center;
		font-family: Lobster;
		font-size: 20px;
		font-weight: 100;
		padding-top: 16px;
		margin-top: 3px;
	}

	.address {
		display: column;
		border: 1px solid black;
		font-weight: 300;
		text-align: center;
		padding: 10px;
		margin-bottom: 30px;
		background: #cff;
	}
	.address section {
		font-weight: 300;
	}
	form {
		width: 80%;
		justify-content: center;
		margin-top: 20px;
	}
	.rccs__card--front {
		width: 100%;
		border: 1px solid black;
	}
	.rccs {
		display: flex;
		width: 100%;
	}
	.rccs__card--front {
		width: 100%;
	}
	input {
		background: #f9f9f9;
		padding: 10px;
		width: 100%;
		border: none;
		margin-bottom: 20px;
		margin-left: 20px;
		font-size: 14px;
		color: rgb(0, 0, 0);
		outline: none;
		font-weight: 300;
		text-align: center;
		border: 1px solid black;
	}

	.rccs__card--unknown > div {
	}
`;
