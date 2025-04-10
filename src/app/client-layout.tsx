'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function ClientLayout({ children }: Props) {
    return <AntdRegistry>{children}</AntdRegistry>
}
