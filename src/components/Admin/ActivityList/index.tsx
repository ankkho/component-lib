import React from 'react'
import Card from '../../Card'

interface dataVal {
	name: string;
	time: string;
	description: string;
}

interface data {
	title: string;
	values: dataVal[]
}

interface activityProps {
  data: data[]
}

const ActivityList: React.FC<activityProps[]> = ({data}) => {
	return (
		<Card>
			{data.map((val: data, idx: number) => {
        const {title, values} = val

        return (
					<div className='m-3' key={`act-${idx}`}>
						<p className='text-sm font-semibold border-b pb-3 text-gray-500 uppercase'>
							{title}
						</p>
						<div>
							{values.map((innerVal: dataVal, innerIdx: number) => (
								<div className='p-3 flex' key={`act-detail-${innerIdx}`}>
									<span className='bg-blue-500 rounded-full p-2 w-1 h-1 mt-1' />
									<p className='text-gray-800 ml-10'>{innerVal.time}</p>
									<div className='ml-10'>
										<p className='text-gray-800 font-semibold capitalize'>
											{innerVal.name}
										</p>
										<p>{innerVal.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				);
      })}
		</Card>
	);
};

export default ActivityList;