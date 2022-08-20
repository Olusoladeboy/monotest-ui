export type CreateCommentType = {
	body: String;
	blogpost: String;
};

export enum PaymentStatusType {
	PENDING = 'PENDING',
	FAILED = 'FAILED',
	SUCCESSFUL = 'SUCCESSFUL',
}
