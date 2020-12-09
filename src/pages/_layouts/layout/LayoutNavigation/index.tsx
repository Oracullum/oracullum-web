import React, { useState, useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  FaThLarge,
  FaChartLine,
  FaBusinessTime,
  FaUser,
  FaAlignLeft,
  FaLayerGroup,
} from 'react-icons/fa';

import oracullumLightImg from '../../../../assets/oracullum-light.svg';
import oracullumDarkImg from '../../../../assets/oracullum-dark.svg';

import Dashboard from '../../../Dashboard';
import Exchanges from '../../../Exchanges';
import Discover from '../../../Discover';
import Reports from '../../../Reports';
import Enterprises from '../../../Enterprises';
import Profile from '../../../Profile';

import {
  Container,
  AsideNavigationContainer,
  AsideNavigationItem,
  ContentWrapper,
} from './styles';

const LayoutNavigation: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  const [dashboardActive, setDashboardActive] = useState(true);
  const [discoverActive, setDiscoverActive] = useState(false);
  const [actionActive, setActionActive] = useState(false);
  const [reportActive, setReportActive] = useState(false);
  const [enterpriseActive, setEnterpriseActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  const handleDashboardActive = useCallback(() => {
    setDashboardActive(true);
    setProfileActive(false);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(false);
    setEnterpriseActive(false);
  }, []);

  const handleProfileActive = useCallback(() => {
    setDashboardActive(false);
    setProfileActive(true);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(false);
    setEnterpriseActive(false);
  }, []);

  const handleDiscoverActive = useCallback(() => {
    setDashboardActive(false);
    setProfileActive(false);
    setDiscoverActive(true);
    setActionActive(false);
    setReportActive(false);
    setEnterpriseActive(false);
  }, []);

  const handleActionsActive = useCallback(() => {
    setDashboardActive(false);
    setProfileActive(false);
    setDiscoverActive(false);
    setActionActive(true);
    setReportActive(false);
    setEnterpriseActive(false);
  }, []);

  const handleReportActive = useCallback(() => {
    setDashboardActive(false);
    setProfileActive(false);
    setDiscoverActive(false);
    setActionActive(false);
    setReportActive(true);
    setEnterpriseActive(false);
  }, []);

  const handleEnterpriseActive = useCallback(() => {
    setDashboardActive(false);
    setProfileActive(false);
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
          <FaThLarge
            size={28}
            color={dashboardActive ? colors.primary : colors.black}
          />

          <div />

          <span>Dashboard</span>
        </AsideNavigationItem>

        <AsideNavigationItem
          active={discoverActive}
          onClick={handleDiscoverActive}
        >
          <FaChartLine
            size={28}
            color={discoverActive ? colors.primary : colors.black}
          />

          <div />

          <span>Descobrir</span>
        </AsideNavigationItem>

        <AsideNavigationItem
          active={enterpriseActive}
          onClick={handleEnterpriseActive}
        >
          <FaBusinessTime
            size={28}
            color={enterpriseActive ? colors.primary : colors.black}
          />

          <div />

          <span>Empresas</span>
        </AsideNavigationItem>

        <AsideNavigationItem
          active={profileActive}
          onClick={handleProfileActive}
        >
          <FaUser
            size={28}
            color={profileActive ? colors.primary : colors.black}
          />

          <div />

          <span>Perfíl</span>
        </AsideNavigationItem>

        <AsideNavigationItem
          active={actionActive}
          onClick={handleActionsActive}
        >
          <FaAlignLeft
            size={28}
            color={actionActive ? colors.primary : colors.black}
          />

          <div />

          <span>Minhas Ações</span>
        </AsideNavigationItem>

        <AsideNavigationItem active={reportActive} onClick={handleReportActive}>
          <FaLayerGroup
            size={28}
            color={reportActive ? colors.primary : colors.black}
          />

          <div />

          <span>Relatórios</span>
        </AsideNavigationItem>
      </AsideNavigationContainer>

      <ContentWrapper>
        {dashboardActive && <Dashboard />}
        {profileActive && <Profile />}
        {discoverActive && <Discover />}
        {actionActive && <Exchanges />}
        {reportActive && <Reports />}
        {enterpriseActive && <Enterprises />}
      </ContentWrapper>
    </Container>
  );
};

export default LayoutNavigation;
