import { Html, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import IPhone from "./IPhone"
import { Suspense } from "react"

const ModelView = ( { index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={`border-2 border-red-500 w-full h-full ${index==2} ? 'right-[-100%] : ''`}
    >
        {/* Ambient light */}
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <Suspense fallback={<Html><div>loading</div></Html>}>
            <IPhone />
        </Suspense>
    </View>
  )
}

export default ModelView