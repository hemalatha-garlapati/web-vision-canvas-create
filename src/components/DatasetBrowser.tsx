
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Database, Users, Calendar, ExternalLink, Activity } from 'lucide-react';

const DatasetBrowser = () => {
  const datasets = [
    {
      id: 'GSE123456',
      title: 'Breast Cancer vs Normal Tissue Expression Profile',
      description: 'Comprehensive gene expression analysis comparing breast cancer tissue samples with normal controls using Affymetrix arrays for differential expression analysis.',
      samples: 180,
      platform: 'Affymetrix HG-U133A',
      organism: 'Homo sapiens',
      date: '2023-08-15',
      status: 'Available',
      dataType: 'Microarray',
      comparison: 'Cancer vs Normal'
    },
    {
      id: 'GSE789012',
      title: 'Lung Adenocarcinoma RNA-seq Study',
      description: 'High-throughput RNA sequencing of lung adenocarcinoma samples compared to adjacent normal tissue for biomarker discovery.',
      samples: 95,
      platform: 'Illumina HiSeq 2500',
      organism: 'Homo sapiens',
      date: '2023-07-22',
      status: 'Available',
      dataType: 'RNA-seq',
      comparison: 'Disease vs Healthy'
    },
    {
      id: 'GSE345678',
      title: 'Alzheimer\'s Disease Brain Transcriptome',
      description: 'Gene expression changes in brain tissue from Alzheimer\'s disease patients versus age-matched controls for pathway analysis.',
      samples: 64,
      platform: 'Illumina HumanHT-12',
      organism: 'Homo sapiens',
      date: '2023-06-10',
      status: 'Processing',
      dataType: 'Microarray',
      comparison: 'AD vs Control'
    }
  ];

  return (
    <section id="datasets" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">GEO Dataset Repository</h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse curated microarray and RNA-seq datasets from NCBI's Gene Expression Omnibus
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {datasets.map((dataset) => (
            <Card key={dataset.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {dataset.id}
                  </CardTitle>
                  <div className="flex space-x-1">
                    <Badge variant={dataset.status === 'Available' ? 'default' : 'secondary'}>
                      {dataset.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {dataset.dataType}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-blue-600 mt-2">
                  {dataset.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{dataset.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {dataset.samples} samples
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Database className="w-4 h-4 mr-2" />
                    {dataset.platform}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Activity className="w-4 h-4 mr-2" />
                    {dataset.comparison}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {dataset.date}
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    disabled={dataset.status !== 'Available'}
                  >
                    Build Classifier
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Database className="w-4 h-4 mr-2" />
            Browse All GEO Datasets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DatasetBrowser;
