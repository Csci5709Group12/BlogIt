import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DemographicInsights = () => {
  // Sample data based on available user fields
  const data = {
    locationDistribution: [
      { location: 'North America', count: 450 },
      { location: 'Europe', count: 130 },
      { location: 'Asia', count: 200 },
      { location: 'Africa', count: 130 },
      { location: 'South America', count: 500 },
      { location: 'Oceania', count: 300 },
      { location: 'Antarctica', count: 100 }
    ],
    pronounsDistribution: [
      { pronouns: 'they/them', count: 50 },
      { pronouns: 'he/him', count: 30 },
      { pronouns: 'she/her', count: 20 },
    ],
    workStatusDistribution: [
      { workStatus: 'Hero @ Avengers', count: 50 },
      { workStatus: 'Villain', count: 20 },
      { workStatus: 'Civilian', count: 30 },
    ],
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Container>
      <h2>Demographic Insights for Communities</h2>
      <Grid container spacing={5}>
        {/* Location Distribution by Continent */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Location Distribution by Continent</Typography>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.locationDistribution}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="location" />
                  <PolarRadiusAxis angle={30} domain={[0, 50]} />
                  <Radar name="Users" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Pronouns Distribution */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Pronouns Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.pronounsDistribution}
                    dataKey="count"
                    nameKey="pronouns"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                  >
                    {data.pronounsDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Work Status Distribution */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Work Status Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.workStatusDistribution}
                    dataKey="count"
                    nameKey="workStatus"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#ffc658"
                    label
                  >
                    {data.workStatusDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DemographicInsights;
