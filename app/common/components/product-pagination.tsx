import { useSearchParams } from 'react-router';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
	PaginationEllipsis,
} from '~/common/components/ui/pagination';

interface ProductPaginationProps {
	totalPages: number;
}

export default function ProductPagination({
	totalPages,
}: ProductPaginationProps) {
	const [searchParams, setSearchParams] = useSearchParams();

	const page = Number(searchParams.get('page') ?? 1);

	const onClick = (page: number) => {
		searchParams.set('page', page.toString());
		setSearchParams(searchParams);
	};
	return (
		<div>
			<Pagination>
				<PaginationContent>
					{page === 1 ? null : (
						<>
							<PaginationItem>
								<PaginationPrevious
									to={`?page=${page - 1}`}
									onClick={(event) => {
										// link의 기본동작을 막음
										event.preventDefault();
										onClick(page - 1);
									}}
								/>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink
									to={`?page=${page - 1}`}
									onClick={(event) => {
										event.preventDefault();
										onClick(page - 1);
									}}
								>
									{page - 1}
								</PaginationLink>
							</PaginationItem>
						</>
					)}

					<PaginationItem>
						<PaginationLink
							to={`?page=${page}`}
							isActive
							onClick={(event) => {
								event.preventDefault();
								onClick(page);
							}}
						>
							{page}
						</PaginationLink>
					</PaginationItem>
					{page === totalPages ? null : (
						<>
							<PaginationItem>
								<PaginationLink
									to={`?page=${page + 1}`}
									onClick={(event) => {
										event.preventDefault();
										onClick(page + 1);
									}}
								>
									{page + 1}
								</PaginationLink>
							</PaginationItem>
							{page + 1 === totalPages ? null : (
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
							)}
							<PaginationItem>
								<PaginationNext
									to={`?page=${page + 1}`}
									onClick={(event) => {
										event.preventDefault();
										onClick(page + 1);
									}}
								/>
							</PaginationItem>
						</>
					)}
				</PaginationContent>
			</Pagination>
		</div>
	);
}
