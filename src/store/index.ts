import {ActionContext, ActionTree, createStore} from 'vuex'
import {Names, NPCs, Storyhooks} from 'fantasy-content-generator';
import {INameDomainObject, INPCDomainObject, IStoryhookDomainObject} from "fantasy-content-generator/dist/interfaces";

export type Gender = "male" | "female"
export type Race =
    "dragonborn"
    | "dwarf"
    | "elf"
    | "gnome"
    | "halfling"
    | "human"
    | "halfOrc"
    | "halfElf"
    | "tiefling"
    | "aelfir"

export interface CharacterRequestDetails {
    race: Race,
    gender: Gender
}

export enum MutationTypes {
    INCREMENT_COUNTER = "incrementCounter"
}

export enum ActionTypes {
    GET_CHARACTER_NAME = "getCharacterNameAction",
    GET_CHARACTER_STORY_HOOK = "getCharacterStoryHookAction",
    GET_NPC = "getNpcAction"
}

export interface State {
    count: number
}

export interface Mutations<S = State> {
    [MutationTypes.INCREMENT_COUNTER](state: S): void
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>


export interface Actions {
    [ActionTypes.GET_CHARACTER_NAME]({commit}: AugmentedActionContext, payload: CharacterRequestDetails): Promise<INameDomainObject>,

    [ActionTypes.GET_CHARACTER_STORY_HOOK]({commit}: AugmentedActionContext): Promise<IStoryhookDomainObject>,

    [ActionTypes.GET_NPC]({commit}: AugmentedActionContext, payload: CharacterRequestDetails): Promise<INPCDomainObject>,
}


const state: State = {
    count: 0
};

const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GET_CHARACTER_NAME]({commit}, payload: CharacterRequestDetails): Promise<INameDomainObject> {
        return Names.generate({race: payload.race, gender: payload.gender});
    },

    async [ActionTypes.GET_CHARACTER_STORY_HOOK](): Promise<IStoryhookDomainObject> {
        return Storyhooks.npcActs({});
    },

    async [ActionTypes.GET_NPC]({commit}, payload: CharacterRequestDetails): Promise<INPCDomainObject> {
        return NPCs.generate({race: payload.race, gender: payload.gender, shouldGenerateRelations: true});
    }
};

export const store = createStore<State>({
    state: state,
    actions: actions
});