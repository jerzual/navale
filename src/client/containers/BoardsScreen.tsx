import { Scene, registerHandler, removeHandler } from 'react-babylonjs'
import {ArcRotateCamera, ShaderMaterial, Vector3 } from "babylonjs";
import * as React;

export interface Props{

}

export default class BoardsScreen extends React.Component<Props, any> {

    constructor(props) {
        super(props)

        // methods used by Scene (more will be added soon and documentation)
        this.onSceneMount = this.onSceneMount.bind(this)
        this.onMeshPicked = this.onMeshPicked.bind(this)

        // these action creators are exported from
        this.debugOn = props.debugOn
        this.debugOff = props.debugOff
        this.debugEnabled = false;
    }

    toggleDebug() {
        if (this.debugEnabled) {
            this.debugOff()
        } else {
            this.debugOn()
        }
        this.debugEnabled = !this.debugEnabled
    }

    onMeshPicked(mesh, scene) {
        // This will be called when a mesh is picked in the canvas
    }

    onSceneMount(e) {
        const { canvas, scene, engine } = e;

        // Scene to build your environment, Canvas you need to attach your camera.
        const camera = new ArcRotateCamera("Camera", 0, 1.05, 280, Vector3.Zero(), scene);
        camera.attachControl(canvas);

        // if you want to use a shader, pass in the directory to the component.
        const shader = new ShaderMaterial("gradient", scene, "gradient", {});

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    }

    componentDidMount () {

        // you can add listeners to redux actions - they are intercepted by the middleware
        let handlers = {
            ['YOUR_ACTION_TYPE']: (action) => {
                // run any code here - ie: set state that you monitor in your scene.registerBeforeRender(()=> { ... })
                // change properties or animate meshes.
                return true
            },
            ['YOUR_ACTION_TYPE2']: (action) => {
                return true // indicates to middleware that it was handled
            }
        }

        this.actionHandler = (action) => {
            let handler = handlers[action.type]
            if (handler == undefined) {
                console.log(`no handler defined in babylonJS scene for ${action.type}`)
            } else {
                return handler(action)
            }
        }

        registerHandler(this.actionHandler)
    }

    componentWillUnmount() {
        removeHandler(this.actionHandler)
    }

    render() {

        const { appState } = this.props

        return (
            <div>
                <Scene
                    onSceneMount={this.onSceneMount}
                    onMeshPicked={this.onMeshPicked}
                    shadersRepository={'/shaders/'}
                    visible={appState.show3D} />

                <Button onClick={this.toggleDebug}>show/hide BabylonJS debug window</Button>
            </div>
        )
    }
}
