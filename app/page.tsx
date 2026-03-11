import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            道系统工具集
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            三位一体合道自动化体系 - 让修行与现代生活完美融合
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 修行者日课工具 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🧘</div>
            <h2 className="text-2xl font-bold mb-4">修行者日课工具</h2>
            <p className="text-gray-600 mb-6">
              智能记录练功状态，追踪身心变化，让每日修行可视化
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">✓</span>
                <span>每日练功打卡</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">✓</span>
                <span>身心状态追踪</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">✓</span>
                <span>智能数据分析</span>
              </div>
            </div>
            <Link 
              href="/daily-practice" 
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              立即体验
            </Link>
          </div>

          {/* AI Agent 定制 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow opacity-75">
            <div className="text-4xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold mb-4">AI Agent 定制</h2>
            <p className="text-gray-600 mb-6">
              为修行者打造专属的 AI 助手，让技术服务于内在成长
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">✓</span>
                <span>个性化 AI 助手</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">✓</span>
                <span>修行知识库</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">✓</span>
                <span>智能问答指导</span>
              </div>
            </div>
            <button 
              disabled
              className="block w-full text-center bg-gray-300 text-gray-500 py-3 rounded-lg cursor-not-allowed"
            >
              即将推出
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">
          <p>由 Dao System 打造 | 让古老智慧与现代科技相遇</p>
        </div>
      </div>
    </main>
  )
}