import React, { useState, useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Dashboard from '../../../Dashboard';
import Discover from '../../../Discover';
import Actions from '../../../Actions';
import Reports from '../../../Reports';

import oracullumLightImg from '../../../../assets/oracullum-light.svg';
import oracullumDarkImg from '../../../../assets/oracullum-dark.svg';

import {
  Container,
  AsideNavigationContainer,
  AsideNavigationItem,
  FaThLarge,
  FaChartLine,
  FaAlignLeft,
  FaLayerGroup,
  ContentWrapper,
} from './styles';

const LayoutNavigation: React.FC = () => {
  const { title } = useContext(ThemeContext);

  const [dashboardActive, setDashboardActive] = useState(true);
  const [discoverActive, setDiscoverActive] = useState(false);
  const [actionActive, setActionActive] = useState(false);
  const [reportActive, setReportActive] = useState(false);

  const handleDashboardActive = useCallback(() => {
    setDashboardActive(true);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(false);
  }, []);

  const handleDiscoverActive = useCallback(() => {
    setDashboardActive(false);
    setDiscoverActive(true);
    setActionActive(false);
    setReportActive(false);
  }, []);

  const handleActionsActive = useCallback(() => {
    setDashboardActive(false);
    setDiscoverActive(false);
    setActionActive(true);
    setReportActive(false);
  }, []);

  const handleReportActive = useCallback(() => {
    setDashboardActive(false);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(true);
  }, []);

  return (
    <Container>
      <AsideNavigationContainer>
        <img
          src={title === 'light' ? oracullumLightImg : oracullumDarkImg}
          alt="Oracullum"
        />

        <AsideNavigationItem
          active={dashboardActive}
          onClick={handleDashboardActive}
        >
          <FaThLarge active={dashboardActive} />

          <div />

          <span>Dashboard</span>
        </AsideNavigationItem>

        <AsideNavigationItem
          active={discoverActive}
          onClick={handleDiscoverActive}
        >
          <FaChartLine active={discoverActive} />

          <div />

          <span>Descobrir</span>
        </AsideNavigationItem>

        <AsideNavigationItem
          active={actionActive}
          onClick={handleActionsActive}
        >
          <FaAlignLeft active={actionActive} />

          <div />

          <span>Todas Ações</span>
        </AsideNavigationItem>

        <AsideNavigationItem active={reportActive} onClick={handleReportActive}>
          <FaLayerGroup active={reportActive} />

          <div />

          <span>Relatórios</span>
        </AsideNavigationItem>
      </AsideNavigationContainer>
      <ContentWrapper>
        {dashboardActive && <Dashboard />}
        {discoverActive && <Discover />}
        {actionActive && <Actions />}
        {reportActive && <Reports />}
      </ContentWrapper>
    </Container>
  );
};

export default LayoutNavigation;
