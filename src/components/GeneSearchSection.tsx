
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Filter, Download } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const GeneSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDataset, setSelectedDataset] = useState('');

  const handleSearch = () => {
    console.log('Searching for gene:', searchQuery);
    console.log('Selected dataset:', selectedDataset);
  };

  return (
    <section id="search" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Gene Expression Search</h2>
          <p className="mt-4 text-lg text-gray-600">
            Query genes of interest and analyze their expression patterns across datasets
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2 text-blue-600" />
              Search Parameters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gene Symbol or ID
                </label>
                <Input
                  placeholder="e.g., TP53, BRCA1, ENSG00000141510"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dataset Selection
                </label>
                <Select value={selectedDataset} onValueChange={setSelectedDataset}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select GEO dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GSE123456">GSE123456 - Breast Cancer Study</SelectItem>
                    <SelectItem value="GSE789012">GSE789012 - Lung Cancer Analysis</SelectItem>
                    <SelectItem value="GSE345678">GSE345678 - Alzheimer's Disease</SelectItem>
                    <SelectItem value="GSE901234">GSE901234 - Diabetes Research</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sample Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All samples" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All samples</SelectItem>
                    <SelectItem value="healthy">Healthy controls</SelectItem>
                    <SelectItem value="disease">Disease samples</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any platform</SelectItem>
                    <SelectItem value="affy">Affymetrix</SelectItem>
                    <SelectItem value="illumina">Illumina</SelectItem>
                    <SelectItem value="rnaseq">RNA-seq</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organism
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Homo sapiens" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="human">Homo sapiens</SelectItem>
                    <SelectItem value="mouse">Mus musculus</SelectItem>
                    <SelectItem value="rat">Rattus norvegicus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <Button onClick={handleSearch} size="lg" className="px-8">
                <Search className="w-4 h-4 mr-2" />
                Search Expression Data
              </Button>
              <Button variant="outline" size="lg">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GeneSearchSection;
