export enum POST_TYPES{
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export interface post {
    id: string,
    userId: string,
    photo: string,
    description: string,
    createdAt: Date,
    type: POST_TYPES
}