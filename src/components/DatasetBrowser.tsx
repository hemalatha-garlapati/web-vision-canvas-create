
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Database, Users, Calendar, ExternalLink } from 'lucide-react';

const DatasetBrowser = () => {
  const datasets = [
    {
      id: 'GSE123456',
      title: 'Breast Cancer vs Normal Tissue Expression Profile',
      description: 'Comprehensive gene expression analysis comparing breast cancer tissue samples with normal controls using Affymetrix arrays.',
      samples: 180,
      platform: 'Affymetrix HG-U133A',
      organism: 'Homo sapiens',
      date: '2023-08-15',
      status: 'Available'
    },
    {
      id: 'GSE789012',
      title: 'Lung Adenocarcinoma RNA-seq Study',
      description: 'High-throughput RNA sequencing of lung adenocarcinoma samples compared to adjacent normal tissue.',
      samples: 95,
      platform: 'Illumina HiSeq 2500',
      organism: 'Homo sapiens',
      date: '2023-07-22',
      status: 'Available'
    },
    {
      id: 'GSE345678',
      title: 'Alzheimer\'s Disease Brain Transcriptome',
      description: 'Gene expression changes in brain tissue from Alzheimer\'s disease patients versus age-matched controls.',
      samples: 64,
      platform: 'Illumina HumanHT-12',
      organism: 'Homo sapiens',
      date: '2023-06-10',
      status: 'Processing'
    }
  ];

  return (
    <section id="datasets" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Datasets</h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse and analyze curated datasets from NCBI's GEO repository
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
                  <Badge variant={dataset.status === 'Available' ? 'default' : 'secondary'}>
                    {dataset.status}
                  </Badge>
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
                    Analyze Dataset
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
            Browse All Datasets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DatasetBrowser;
