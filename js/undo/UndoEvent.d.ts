import { YamlElement } from "../elements";

export class UndoEvent<T extends YamlElement> {

    emitter: T

    abstract redo(): void
    abstract undo(): void

}
