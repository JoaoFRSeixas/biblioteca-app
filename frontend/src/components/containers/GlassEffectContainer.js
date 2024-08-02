import styled from 'styled-components';

const GlassEffectContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(70px);
  padding: 30px;
  text-align: center;
  max-width: 500px;
`;

export default GlassEffectContainer;