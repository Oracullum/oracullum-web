import React, { useState, useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Dashboard from '../../../Dashboard';
import Exchanges from '../../../Exchanges';
import Discover from '../../../Discover';
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
  FaBusinessTime,
} from './styles';
import Enterprises from '../../../Enterprises';

const LayoutNavigation: React.FC = () => {
  const { title } = useContext(ThemeContext);

  const [dashboardActive, setDashboardActive] = useState(true);
  const [discoverActive, setDiscoverActive] = useState(false);
  const [actionActive, setActionActive] = useState(false);
  const [reportActive, setReportActive] = useState(false);
  const [enterpriseActive, setEnterpriseActive] = useState(false);

  const handleDashboardActive = useCallback(() => {
    setDashboardActive(true);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(false);
    setEnterpriseActive(false);
  }, []);

  const handleDiscoverActive = useCallback(() => {
    setDashboardActive(false);
    setDiscoverActive(true);
    setActionActive(false);
    setReportActive(false);
    setEnterpriseActive(false);
  }, []);

  const handleActionsActive = useCallback(() => {
    setDashboardActive(false);
    setDiscoverActive(false);
    setActionActive(true);
    setReportActive(false);
    setEnterpriseActive(false);
  }, []);

  const handleReportActive = useCallback(() => {
    setDashboardActive(false);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(true);
    setEnterpriseActive(false);
  }, []);

  const handleEnterpriseActive = useCallback(() => {
    setDashboardActive(false);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(false);
    setEnterpriseActive(true);
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

        <AsideNavigationItem
          active={enterpriseActive}
          onClick={handleEnterpriseActive}
        >
          <FaBusinessTime active={enterpriseActive} />

          <div />

          <span>Empresas</span>
        </AsideNavigationItem>
      </AsideNavigationContainer>
      <ContentWrapper>
        {dashboardActive && <Dashboard />}
        {discoverActive && <Discover />}
        {actionActive && <Exchanges />}
        {reportActive && <Reports />}
        {enterpriseActive && <Enterprises />}
      </ContentWrapper>
    </Container>
  );
};

export default LayoutNavigation;
