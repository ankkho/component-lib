import React from 'react';
import Loader from 'react-loader-spinner';

interface discountBoxProps {
	discountPer?: number;
	onSale: boolean;
	salePrice?: number;
	regularPrice: number;
	currencySymbol?: string;
}

const getDiscountPer = (salePrice: number, regularPrice: number): number => {
	if (salePrice && regularPrice) {
		return (salePrice / regularPrice) * 100;
	}
	return 0;
};

const RupeeIcon = <span>&#x20B9;</span>;

const outOfStockText = <p className='capitalize text-red-600'>Out of Stock</p>;

const InputField = ({
	className = '',
	type,
	name,
	label,
	disabled,
	value = '',
	placeholder = '',
	onChange,
	required = false,
}) => (
	<div className={className}>
		<label
			className='block text-gray-700 text-sm font-bold mb-2'
			htmlFor={name}>
			{label}
		</label>
		<input
			id={name}
			required={required}
			onChange={onChange}
			disabled={disabled}
			className={`${
				type === 'text' ? 'bg-gray-200 focus:bg-white' : ''
			} bg-gray-100 focus:outline-none focus:shadow-outline border rounded-md py-2 px-4 appearance-none leading-normal`}
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
		/>
	</div>
);

const RadioAndCheckboxInput = ({ type, onClick, id, name, checked, label }) => (
	<>
		<label
			onClick={onClick}
			className='pl-2 pr-3 cursor-pointer inline-flex items-center'
			htmlFor={id}>
			<input
				onChange={onClick}
				id={id}
				type={type}
				name={name}
				checked={checked}
			/>
			<span className='text-gray-700 text-md font-semibold pl-2'>{label}</span>
		</label>
	</>
);

const variantDetails = ({ activeVariant, variations }) => {
	const activeVariantDetails = variations.filter(
		(val) => val.attributes.nodes[0].value === activeVariant
	);

	const saleExists = activeVariantDetails.filter((val) => val.onSale)[0];

	if (saleExists) {
		const { regularPrice, salePrice } = saleExists;
		const discountPer = getDiscountPer({ regularPrice, salePrice });

		return {
			...saleExists,
			discountPer,
		};
	}

	return activeVariantDetails[0];
};

const LoaderIcon = () => (
	<div className='flex justify-center flex-col items-center min-h-screen'>
		<Loader type='TailSpin' color='black' height={100} width={100} />
	</div>
);

const DiscountBox: React.FC<discountBoxProps> = ({
	discountPer,
	onSale = false,
	salePrice,
	regularPrice,
	currencySymbol = 'INR',
}) => (
	<div className='flex flex-wrap text-center'>
		{onSale && (
			<>
				<span
					className='text-red-800 font-semibold text-sm pt-0 pl-0 p-2'
					dangerouslySetInnerHTML={{ __html: `${discountPer} % Off` }}
				/>
				<p className='line-through text-gray-700 pt-0 p-2 flex'>
					{RupeeIcon}
					{`${regularPrice}`}
				</p>
				<p
					className={`md:text-xl font-semibold text-blue-700 ${
						onSale && 'pl-2'
					}`}>
					{RupeeIcon}
					{onSale ? salePrice : regularPrice}
				</p>
			</>
		)}
	</div>
);

export {
	RupeeIcon,
	DiscountBox,
	LoaderIcon,
	InputField,
	getDiscountPer,
	RadioAndCheckboxInput,
	outOfStockText,
	variantDetails,
};
