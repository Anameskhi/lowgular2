import { ISkill } from "./skill_Ids"

export interface iCandidates {
  id: string  
  name: string
  surname: string
  email: string
  statusId: string
  skillIds: ISkill[]
}