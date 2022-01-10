import { Suspense, forwardRef, useCallback } from 'react'
import { useRemoteModule } from 'react-dynamic-remote-component'
import { RemoteModule } from 'react-dynamic-remote-component/dist/types/types'

import { Row, Col, Typography, Button, Skeleton } from 'antd'
import ErrorBoundary from 'os/components/errorBoundary'
import IonIcon from 'shared/antd/ionicon'

/**
 * Remote component
 */
const RemoteComponent = forwardRef<
  HTMLElement,
  { manifest: RemoteModule; frame: string }
>(({ manifest, frame, ...props }, ref) => {
  const { [frame]: Component } = useRemoteModule(manifest)
  return <Component {...props} ref={ref} />
})

/**
 * Error Component
 */
const FrameError = ({ url = 'Unknown' }: { url?: string }) => {
  const retry = () => window.location.reload()
  const support = useCallback(() => {
    return window.open(
      `mailto:hi@sentre.io?subject=${url} has failed`,
      '_blank',
    )
  }, [url])

  return (
    <Row
      gutter={[8, 8]}
      style={{ height: '100%' }}
      align="middle"
      justify="center"
    >
      <Col span={24}>
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          {url}
        </Typography.Title>
      </Col>
      <Col span={24}>
        <p style={{ textAlign: 'center' }}>
          Oops! The application can't load properly.
        </p>
      </Col>
      <Col span={12}>
        <Button type="text" onClick={support} block>
          Support
        </Button>
      </Col>
      <Col span={12}>
        <Button
          type="primary"
          onClick={retry}
          icon={<IonIcon name="reload-outline" />}
          block
        >
          Retry
        </Button>
      </Col>
    </Row>
  )
}

/**
 * Frame Loader
 */
const FrameLoader = forwardRef<
  HTMLElement,
  ComponentManifest & { frame: string }
>(({ url, appId, frame, ...props }, ref) => {
  const manifest = { url, scope: appId, module: './bootstrap' }
  return (
    <ErrorBoundary defaultChildren={<FrameError url={url} />}>
      <Suspense fallback={<Skeleton active />}>
        <RemoteComponent
          manifest={manifest}
          frame={frame}
          {...props}
          ref={ref}
        />
      </Suspense>
    </ErrorBoundary>
  )
})

export default FrameLoader
