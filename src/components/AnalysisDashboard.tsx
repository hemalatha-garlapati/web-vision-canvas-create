
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BarChart3, TrendingUp, Download, Play } from 'lucide-react';

const AnalysisDashboard = () => {
  return (
    <section id="analysis" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Analysis Dashboard</h2>
          <p className="mt-4 text-lg text-gray-600">
            Perform differential expression analysis and build classification models
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                Differential Expression Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current Analysis</h4>
                <p className="text-sm text-gray-600 mb-3">
                  GSE123456: Breast Cancer vs Normal (TP53 gene)
                </p>
                <Progress value={75} className="mb-2" />
                <p className="text-xs text-gray-500">75% complete</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-xs text-gray-600">Upregulated</div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">892</div>
                  <div className="text-xs text-gray-600">Downregulated</div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <Play className="w-4 h-4 mr-1" />
                  Run Analysis
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Classification Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Model Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Accuracy:</span>
                    <span className="text-sm font-medium">94.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Sensitivity:</span>
                    <span className="text-sm font-medium">91.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Specificity:</span>
                    <span className="text-sm font-medium">96.5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">156</div>
                  <div className="text-xs text-gray-600">Top Features Selected</div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" className="flex-1" variant="outline">
                  Train Model
                </Button>
                <Button size="sm" className="flex-1">
                  View Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Gene Symbol</th>
                    <th className="text-left py-2">Log2 Fold Change</th>
                    <th className="text-left py-2">P-value</th>
                    <th className="text-left py-2">Adj. P-value</th>
                    <th className="text-left py-2">Regulation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">TP53</td>
                    <td className="py-2">-2.34</td>
                    <td className="py-2">1.2e-05</td>
                    <td className="py-2">3.4e-04</td>
                    <td className="py-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                        Down
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">BRCA1</td>
                    <td className="py-2">1.87</td>
                    <td className="py-2">2.1e-06</td>
                    <td className="py-2">1.2e-04</td>
                    <td className="py-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        Up
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">EGFR</td>
                    <td className="py-2">3.12</td>
                    <td className="py-2">5.8e-08</td>
                    <td className="py-2">2.1e-06</td>
                    <td className="py-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        Up
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalysisDashboard;
